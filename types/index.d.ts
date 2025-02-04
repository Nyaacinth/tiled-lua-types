// TypeScript Version: 3.7

// Definitions for Tiled 1.4
// Project: https://github.com/bjorn/tiled#readme
//
// Types made with help of Tiled documentation
// https://doc.mapeditor.org/en/stable/reference/json-map-format

// --WANG--

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#wang-color
 */
export interface TiledWangColor {
    color: string;
    name: string;
    probability: number;
    tile: number;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#wang-tile
 */
export interface TiledWangTile {
    dflip: boolean;
    hflip: boolean;
    tileid: number;
    vflip: boolean;
    wangid: number[];
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#wang-set
 */
export interface TiledWangSet {
    cornercolors: TiledWangColor[];
    edgecolors: TiledWangColor[];
    name: string;
    properties?: TiledProperties;
    tile: number;
    wangtiles: TiledWangTile[];
}

// --TILESET--

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#point
 */
export interface Point {
    x: number;
    y: number;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#tileset
 */
export interface TiledTileset {
    backgroundcolor?: string;
    columns: number;
    firstgid: number;
    grid?: TiledGrid;
    image?: string;
    imagewidth?: number;
    imageheight?: number;
    margin: number;
    name: string;
    objectalignment?: 'unspecified' | 'topleft' | 'top' | 'topright' | 'left' | 'center' | 'right' | 'bottomleft' | 'bottom' | 'bottomright';
    properties?: TiledProperties;
    source?: string;
    spacing: number;
    terrains?: TiledTerrain[];
    tilecount: number;
    tiledversion?: string;
    tileheight: number;
    tileoffset?: { x: number; y: number; };
    tiles?: TiledTile[];
    tilewidth: number;
    transparentcolor?: string;
    type?: 'tileset';
    wangsets?: TiledWangSet[];
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#grid
 */
export interface TiledGrid {
    orientation: 'orthogonal' | 'isometric';
    width: number;
    height: number;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#tile-definition
 */
export interface TiledTile {
    animation?: TiledFrame[];
    id: number;
    image?: string;
    imageheight?: number;
    imagewidth?: number;
    objectgroup?: TiledLayerObjectgroup;
    probability?: number;
    properties?: TiledProperties;
    terrain?: number[];
    type?: string;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#frame
 */
export interface TiledFrame {
    duration: number;
    tileid: number;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#terrain
 */
export interface TiledTerrain {
    name: string;
    properties?: TiledProperties;
    tile: number;
}

// --LAYER--

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#chunk
 */
export interface TiledChunk {
    data: number[] | string;
    height: number;
    width: number;
    x: number;
    y: number;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#text
 */
export interface TiledText {
    bold?: boolean;
    color?: string;
    fontfamily?: string;
    halign?: 'center' | 'right' | 'justify' | 'left';
    italic?: boolean;
    kerning?: boolean;
    pixelsize?: number;
    strikeout?: boolean;
    text: string;
    underline?: boolean;
    valign?: string;
    wrap?: boolean;
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#object
 */
export interface TiledObject {
    gid?: number;
    height: number;
    id: number;
    name: string;
    polygon?: Point[];
    polyline?: Point[];
    properties?: TiledProperties;
    rotation: number;
    text?: TiledText;
    type: string;
    shape: string;
    visible: boolean;
    width: number;
    x: number;
    y: number;
}

export type TiledLayerType = 'tilelayer' | 'objectgroup' | 'imagelayer' | 'group';

export interface TiledLayerAbstract<T extends TiledLayerType> {
    id?: number;
    name: string;
    type: T;
    x: number;
    y: number;
    width: number;
    height: number;
    offsetx?: number;
    offsety?: number;
    startx?: number;
    starty?: number;
    tintcolor?: string;
    opacity: number;
    properties?: TiledProperties;
    visible: boolean;
}

export interface TiledLayerTilelayer extends TiledLayerAbstract<'tilelayer'> {
    type: 'tilelayer';
    chunks?: TiledChunk[];
    compression?: 'zlib' | 'gzip' | 'zstd' | '';
    data: number[] | string;
    encoding?: 'csv' | 'base64';
}

export interface TiledLayerObjectgroup extends TiledLayerAbstract<'objectgroup'> {
    type: 'objectgroup';
    draworder: 'topdown' | 'index';
    objects: TiledObject[];
}

export interface TiledLayerImagelayer extends TiledLayerAbstract<'imagelayer'> {
    type: 'imagelayer';
    image: string;
    transparentcolor?: string;
}

export interface TiledLayerGroup extends TiledLayerAbstract<'group'> {
    type: 'group';
    layers: TiledLayer[];
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#layer
 */
export type TiledLayer = TiledLayerTilelayer | TiledLayerObjectgroup | TiledLayerImagelayer | TiledLayerGroup;

// --MAP--

export type TiledMapType = 'orthogonal' | 'isometric' | 'staggered' | 'hexagonal';

export interface TiledMapAbstract<O extends TiledMapType> {
    type?: 'map';
    version: number;
    tiledversion?: string;
    width: number;
    height: number;
    tileheight: number;
    tilewidth: number;
    infinite?: boolean;
    orientation: O;
    backgroundcolor?: string;
    nextlayerid?: number;
    nextobjectid: number;
    properties?: TiledProperties;
    layers: TiledLayer[];
    tilesets: TiledTileset[];
    compressionlevel?: number;
}

export interface TiledMapIsometric extends TiledMapAbstract<'isometric'> {
    orientation: 'isometric';
}

export interface TiledMapHexAndStag {
    staggeraxis: 'x' | 'y';
    staggerindex: 'odd' | 'even';
}

export type RenderOrder = 'left-down' | 'left-up' | 'right-down' | 'right-up';

export interface TiledMapOrthogonal extends TiledMapAbstract<'orthogonal'> {
    orientation: 'orthogonal';
    renderorder: RenderOrder;
}

export interface TiledMapHexagonal extends TiledMapAbstract<'hexagonal'>, TiledMapHexAndStag {
    orientation: 'hexagonal';
    hexsidelength: number;
}

export interface TiledMapStaggered extends TiledMapAbstract<'staggered'>, TiledMapHexAndStag {
    orientation: 'staggered';
}

/**
 * @see https://doc.mapeditor.org/en/stable/reference/json-map-format/#map
 */
export type TiledMap = TiledMapOrthogonal
    | TiledMapIsometric
    | TiledMapHexagonal
    | TiledMapStaggered;

// --PROPERTY--

export type TiledPropertyValue = string | number | boolean;

export type TiledProperties = {[key: string]: TiledPropertyValue}

export { };

export default TiledMap;
