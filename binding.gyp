{
  "targets": [
    {
      "target_name": "x11GostHash",
      "sources": [
          "x11_gost_hash.cc",
          "x11hash.c",
          "x11hash.h",
          "sha3/blake.c",
          "sha3/bmw.c",
          "sha3/groestl.c",
          "sha3/jh.c",
          "sha3/keccak.c",
          "sha3/gost.c",
          "sha3/skein.c",
          "sha3/cubehash.c",
          "sha3/echo.c",
          "sha3/luffa.c",
          "sha3/simd.c",
          "sha3/shavite.c"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")",
          ".",
          "./sha3"
      ]
    }
  ]
}
