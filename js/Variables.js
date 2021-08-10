let canvas;
const CANVASHEIGHT = 600;
const CANVASWIDTH = 800;

const UPARROW = 38;

//images
let backgroundImage;
let sidewalkImage;
let buildings;
let powerLines;
let plane;
let pigeon = [];
var currentPigeonIndex = 0;
let man = [];
var currentManIndex = 0;

//game variables
const GRAVITY = 0.12;
const gameStart = false;

const scoreHolder = document.querySelector(".distance");
