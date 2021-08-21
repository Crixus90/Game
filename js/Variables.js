let canvas;
const CANVASHEIGHT = 600;
const CANVASWIDTH = 800;

const UPARROW = 38;
const DOWNARROW = 40;

//images
let menuImage;
let backgroundImage;
let sidewalkImage;
let buildings;
let powerLines;
let plane;
let pigeon = [];
let poop;
let poopImg;
let currentPigeonIndex = 0;
let man = [];
let currentManIndex = 0;
let chippy;

//game variables
const GRAVITY = 0.12;
const gameStart = false;

//sounds

const scoreHolder = document.querySelector(".distance");
const poopHolder = document.querySelector(".poop");
const poopAmmoHolder = document.querySelector(".poopAmmo");
