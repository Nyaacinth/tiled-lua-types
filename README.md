# tiled-lua-types

Forked from [tiled-types](https://github.com/Chnapy/tiled-types)

Type definitions of Tiled generated Lua https://github.com/bjorn/tiled.

<!-- [![Build Status](https://travis-ci.com/Chnapy/tiled-types.svg?branch=master)](https://travis-ci.com/Chnapy/tiled-types) -->

Made for Tiled 1.4.

Based on its documentation https://doc.mapeditor.org/en/stable/reference/json-map-format.

## Installation

```
yarn add -D Nyaacinth/tiled-lua-types
```

## Use

```typescript
import TiledMap, { TiledLayerTilelayer } from "tiled-lua-types";

// Assume we're in node context
const map: TiledMap = fs.readFileSync('path/to/schema.json', 'utf8');

const allTilelayers: TiledLayerTilelayer[] = map.layers
    .filter((l): l is TiledLayerTilelayer => l.type === 'tilelayer');
```
You can find quite the same example [here](types/tiled-tests.ts)

## Credits

Thanks to [type-zoo](https://github.com/pelotom/type-zoo) for there repo configuration :+1:

And to [Tiled contributors](https://github.com/bjorn/tiled/graphs/contributors) :100:
