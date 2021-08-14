let canvas;
const CANVASHEIGHT = 600;
const CANVASWIDTH = 800;

const UPARROW = 38;
const SPACE = 32;

//images
let menuImage;
let backgroundImage;
let sidewalkImage;
let buildings;
let powerLines;
let plane;
let pigeon = [];
let poop;
var currentPigeonIndex = 0;
let man = [];
var currentManIndex = 0;

//game variables
const GRAVITY = 0.12;
const gameStart = false;

const scoreHolder = document.querySelector(".distance");
const poopHolder = document.querySelector(".poop");
