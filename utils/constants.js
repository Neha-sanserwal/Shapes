const rectangle_filled = require("../libs/shapes.js").rectangle_filled;
const rectangle_hollow = require("../libs/shapes.js").rectangle_hollow;
const rectangle_alternating = require("../libs/shapes.js").rectangle_alternating;
const triangle_filled = require("../libs/shapes.js").triangle_filled;
const triangle_hollow = require("../libs/shapes.js").triangle_hollow;
const triangle_alternating = require("../libs/shapes.js").triangle_alternating;
const diamond_filled = require("../libs/shapes.js").diamond_filled;
const POSSIBLE_PATTERNS =  [["rectangle_filled" , rectangle_filled],
        ["rectangle_hollow" ,rectangle_hollow],
        ["rectangle_alternating" ,rectangle_alternating],
        ["triangle_filled" ,triangle_filled],
        ["triangle_hollow" ,triangle_hollow],
        ["triangle_alternating" ,triangle_alternating],
        ["diamond_filled", diamond_filled]
    ];

const DEFAULT_DATA = [["-s","rectangle"],["-p","filled"] , ["-d","5,5"]];
const ERR_MESSAGE =  [false,"Please Enter Valid Input"];
const SHAPES = ["rectangle", "triangle","diamond"];
const PROPS = ["filled", "hollow","alternating"];

exports.POSSIBLE_PATTERNS = POSSIBLE_PATTERNS;
exports.DEFAULT_DATA = DEFAULT_DATA;
exports.ERR_MESSAGE = ERR_MESSAGE;
exports.SHAPES = SHAPES;
exports.PROPS = PROPS;
