/**/var CANVAS_SIZE = 800;
var ARENA_SIZE = 0;
var ARENA_TOP_LEFT = [0,0];
var ARENA_OFFSET = 100;

/**/var FRAME_RATE = 24;
var WORLD_TIME = 0.0;
var DELTA_TIME = 0.0;
var FRAME_START = new Date();

var PLANTS        = [];
/**/var PLANT_RADIUS  = 1;
/**/var GROWTH_RATE   = 0.2; // Percent chance of plant growing from another plant
/**/var GROWTH_PERIOD = 0.1; // Period between plant growths (in s)
/**/var MATURE_AGE    = 5;   // Age at which plants may birth
/**/var DEATH_RATE    = 0.1; // Percent chance of plant dying at mature age
/**/var INIT_PLANTS   = 100; // Number of plants to start with
/**/var MAX_PLANTS    = 1000;
var PLANT_TIMER   = 0.0; // Keeps track of time until plants may grow
var AGE_RED       = 255 / MATURE_AGE;

/// Object Definitions
function Plant(pos, size) {
	// Member variables
	this.pos  = pos;
	pos[0] = clamp(pos[0], size, ARENA_SIZE - size);
	pos[1] = clamp(pos[1], size, ARENA_SIZE - size);
	this.size = size;
	this.age  = 0;

	// Member functions
	this.draw = function() {
	if (typeof this == 'undefined')
		return;

	// Draws a simple circle plant
	// Properties
	fill(this.age*AGE_RED,255,0,255);
	stroke(this.age*AGE_RED,255,0,255);
	strokeWeight(1);

	// Draw -- In Arena Space
	if (this.size <= 0)
		point(AS2CS(this.pos)[0], AS2CS(this.pos)[1]);
	else
		circle(AS2CS(this.pos)[0], AS2CS(this.pos)[1], this.size)
	}
}

/// Might as well be main
function setup(size) { // Sets up necessary canvas vars
	// Determine arena variables
	ARENA_SIZE = CANVAS_SIZE - (2*ARENA_OFFSET);
	ARENA_TOP_LEFT = [ARENA_OFFSET, ARENA_OFFSET];

	// Set up canvas
	var canvas  = createCanvas(CANVAS_SIZE, CANVAS_SIZE + 110);
	background(0);
	frameRate(FRAME_RATE);

	for (i = 0; i < INIT_PLANTS; i++)
	{
		var xx = Math.random() * ARENA_SIZE;
		var yy = Math.random() * ARENA_SIZE;
		PLANTS[i] = new Plant([xx,yy], PLANT_RADIUS);
	}

	// Draw once
	// Anything after this point need e drawn only once
}

function draw() {
	// Keep track of frame times
	var temp_date = new Date();
	DELTA_TIME    = (temp_date - FRAME_START) / 1000;
	WORLD_TIME    += DELTA_TIME; //console.log(WORLD_TIME);
	FRAME_START   = temp_date; console.log(DELTA_TIME);

	background(0);

	// Plant processing
	if (PLANTS.length < MAX_PLANTS)
	{// Just to be safe for now, since they don't die
		PLANT_TIMER += DELTA_TIME;

		if (PLANT_TIMER >= GROWTH_PERIOD)
		{// Give plants chance to grow
			var currentPlantNum = PLANTS.length;

			for (i = 0; i < currentPlantNum; i++)
			{
				PLANTS[i].age++;

				if (Math.random() < DEATH_RATE)
				{// The plant is kill
					PLANTS.splice(i, 1);
					i--;
					currentPlantNum--;
				}
				else if ((PLANTS.length < MAX_PLANTS) && (PLANTS[i].age >= MATURE_AGE) && (Math.random() < GROWTH_RATE))
				{// Birth new plant
					var xx = PLANTS[i].pos[0] + (Math.random() * 50) - 25;
					var yy = PLANTS[i].pos[1] + (Math.random() * 50) - 25;

					PLANTS[PLANTS.length] = new Plant([xx,yy], PLANT_RADIUS);
				}
			}

			// Reset world time
			PLANT_TIMER = 0.0;
		}
	}

	// Draw all plants
	for (i = 0; i < PLANTS.length; i++)
	{
		PLANTS[i].draw();
	}

	// Plant tracking graph
	drawGraph();

	//Call last
	drawArenaEdge();
	//coverEdges();
}

/// Drawing functions, for the various arena objects
function coverEdges() {
	// Edge properties
	noFill();
	stroke(0,0,0,255);
	strokeWeight((ARENA_OFFSET-1)*2); // TODO: Fix extra bottom-right pixel edgr

	// Draw -- In Canvas Space
	square(0,0,CANVAS_SIZE);
}

function drawArenaEdge() {
	// Drawing properties
	noFill();
	stroke(255, 0, 0, 255);
	strokeWeight(1);

	// Draw -- In Canvas Space
	square(ARENA_TOP_LEFT[0], ARENA_TOP_LEFT[1], ARENA_SIZE);
}


function drawGraph() {
	// Axes
	// Properties
	stroke(255,0,0,255);
	strokeWeight(1);

	// Draw -- In Canvas Space
	var origin = [ARENA_OFFSET, ARENA_OFFSET + ARENA_SIZE + 110];

	line(ARENA_OFFSET, ARENA_OFFSET + ARENA_SIZE + 10, origin[0], origin[1]);
	line(origin[0], origin[1], ARENA_OFFSET + ARENA_SIZE, ARENA_OFFSET + ARENA_SIZE + 110);

	// Labels
	// Properties
	fill(255,255,255,255);
	textAlign(RIGHT);

	// Draw -- In Canvas Space
	text("Num\nplants", origin[0] - 50, origin[1] - 50);
	text("0", origin[0] - 5, origin[1] - 0);
	text((MAX_PLANTS/2).toString(), origin[0] - 5, origin[1] - 50);
	text(MAX_PLANTS.toString(), origin[0] - 5, origin[1] - 100);

	// Points
	// Some math

	// Properties
	stroke(0,0,255,255);
	noFill();
	// Draw -- In Canvas Space
	//point(origin[0] + (WORLD_TIME)*1, origin[1] - (PLANTS.length/MAX_PLANTS) * 100);
	circle(origin[0] + ((WORLD_TIME)*5)%ARENA_SIZE, origin[1] - (PLANTS.length/MAX_PLANTS) * 100, 5);
}

/// Utility functions
function CS2AS(pos) {
	// Canvas Space to Arena Space
	return [pos[0] - ARENA_OFFSET, pos[1] - ARENA_OFFSET];
}

function AS2CS(pos) {
	// Arena Space to Canvas Space
	return [pos[0] + ARENA_OFFSET, pos[1] + ARENA_OFFSET];
}

function clamp(val, min, max) {
	return Math.min(Math.max(val, min), max);
}