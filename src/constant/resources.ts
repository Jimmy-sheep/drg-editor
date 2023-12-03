/* eslint-disable @typescript-eslint/no-magic-numbers */
export const enum ITEMS {
  CREDITS = 'credits',
  SCRIP = 'scrip',
  CORE = 'core',
  BISMOR = 'bismor',
  MAGNITE = 'magnite',
  DATA = 'data',
  CROPPA = 'croppa',
  STARCH = 'starch',
  PHAZYONITE = 'phazyonite',
  UMANITE = 'umanite',
  ERROR = 'error',
  ENOR = 'enor',
  MALT = 'malt',
  BARLEY = 'barley',
  JADIZ = 'jadiz',
  YEAST = 'yeast'
}

export const EXPANDED_RESOURCE_NAMES: Record<string, string> = {
  [ITEMS.CORE]: 'Blank Cores',
  [ITEMS.ENOR]: 'Enor Pearl',
  [ITEMS.BARLEY]: 'Barley Bulb',
  [ITEMS.MALT]: 'Malt Star',
  [ITEMS.STARCH]: 'Starch Nut',
  [ITEMS.DATA]: 'Data Cells',
  [ITEMS.ERROR]: 'Error Cubes',
  [ITEMS.YEAST]: 'Yeast Cone'
};

export const RESOURCES: Record<ITEMS, number[]> = {
  [ITEMS.CREDITS]: [
    0x43, 0x72, 0x65, 0x64, 0x69, 0x74, 0x73, 0x00, 0x0c, 0x00, 0x00, 0x00,
    0x49, 0x6e, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x00,
    0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ],
  [ITEMS.SCRIP]: [
    0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x73, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x49,
    0x6e, 0x74, 0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x00, 0x04,
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
  ],
  [ITEMS.CORE]: [
    0xa1, 0x0c, 0xb2, 0x85, 0x38, 0x71, 0xfb, 0x49, 0x9a, 0xc8, 0x54, 0xa1,
    0xcd, 0xe2, 0x20, 0x2c
  ],
  [ITEMS.BISMOR]: [
    0xaf, 0x0d, 0xc4, 0xfe, 0x83, 0x61, 0xbb, 0x48, 0xb3, 0x2c, 0x92, 0xcc,
    0x97, 0xe2, 0x1d, 0xe7
  ],
  [ITEMS.MAGNITE]: [
    0xaa, 0xde, 0xd8, 0x76, 0x6c, 0x22, 0x7d, 0x40, 0x80, 0x32, 0xaf, 0xd1,
    0x8d, 0x63, 0x56, 0x1e
  ],
  [ITEMS.DATA]: [
    0x99, 0xfa, 0x52, 0x6a, 0xd8, 0x77, 0x48, 0x45, 0x94, 0x98, 0x90, 0x5a,
    0x27, 0x86, 0x93, 0xf6
  ],
  [ITEMS.CROPPA]: [
    0x8a, 0xa7, 0xfb, 0x43, 0x29, 0x3a, 0x0b, 0x49, 0xb8, 0xbe, 0x42, 0xff,
    0xe0, 0x68, 0xa4, 0x4c
  ],
  [ITEMS.STARCH]: [
    0x72, 0x31, 0x22, 0x04, 0xe2, 0x87, 0xbc, 0x41, 0x81, 0x55, 0x40, 0xa0,
    0xcf, 0x88, 0x12, 0x80
  ],
  [ITEMS.PHAZYONITE]: [
    0x67, 0x66, 0x8a, 0xae, 0x82, 0x8f, 0xdb, 0x48, 0xa9, 0x11, 0x1e, 0x1b,
    0x91, 0x2d, 0xbf, 0xa4
  ],
  [ITEMS.UMANITE]: [
    0x5f, 0x2b, 0xcf, 0x83, 0x47, 0x76, 0x0a, 0x42, 0xa2, 0x3b, 0x6e, 0xdc,
    0x07, 0xc0, 0x94, 0x1d
  ],
  [ITEMS.ERROR]: [
    0x58, 0x28, 0x65, 0x2c, 0x9a, 0x5d, 0xe8, 0x45, 0xa9, 0xe2, 0xe1, 0xb8,
    0xb4, 0x63, 0xc5, 0x16
  ],
  [ITEMS.ENOR]: [
    0x48, 0x8d, 0x05, 0x14, 0x6f, 0x5f, 0x75, 0x4b, 0xa3, 0xd4, 0x61, 0x0d,
    0x08, 0xc0, 0x60, 0x3e
  ],
  [ITEMS.MALT]: [
    0x41, 0xea, 0x55, 0x0c, 0x1d, 0x46, 0xc5, 0x4b, 0xbe, 0x2e, 0x9c, 0xa5,
    0xa7, 0xac, 0xcb, 0x06
  ],
  [ITEMS.BARLEY]: [
    0x22, 0xda, 0xa7, 0x57, 0xad, 0x7a, 0x80, 0x49, 0x89, 0x1b, 0x17, 0xed,
    0xcc, 0x2f, 0xe0, 0x98
  ],
  [ITEMS.JADIZ]: [
    0x22, 0xbc, 0x4f, 0x7d, 0x07, 0xd1, 0x3e, 0x43, 0xbf, 0xca, 0x81, 0xbd,
    0x9c, 0x14, 0xb1, 0xaf
  ],
  [ITEMS.YEAST]: [
    0x07, 0x85, 0x48, 0xb9, 0x32, 0x32, 0xc0, 0x40, 0x85, 0xf8, 0x92, 0xe0,
    0x84, 0xa7, 0x41, 0x00
  ]
};

export const CATEGORIES: Record<string, ITEMS[]> = {
  minerals: [
    ITEMS.MAGNITE,
    ITEMS.BISMOR,
    ITEMS.CROPPA,
    ITEMS.UMANITE,
    ITEMS.JADIZ,
    ITEMS.ENOR
  ],
  brewing: [ITEMS.STARCH, ITEMS.YEAST, ITEMS.MALT, ITEMS.BARLEY],
  miscellaneous: [
    ITEMS.CREDITS,
    ITEMS.ERROR,
    ITEMS.DATA,
    ITEMS.CORE,
    ITEMS.PHAZYONITE
  ]
};
