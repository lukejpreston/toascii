# To Ascii

install with `npm i -g @lukejpreston/toascii`

quick and dirty text to ascii generator

```
--text -t "the is the text"
--color -c color
--bgColor -b color
--font -f "font name"
```

get a list of fonts with

```
--fonts
```

get a list of colors with

```
--colors --bgColors
```

```
toascii -t "Choo Choo\!" -f Train -c black -b yellowBright

   ___    _                                 ___    _                         _    
  / __|  | |_      ___     ___      o O O  / __|  | |_      ___     ___     | |   
 | (__   | ' \    / _ \   / _ \    o      | (__   | ' \    / _ \   / _ \    |_|   
  \___|  |_||_|   \___/   \___/   TS__[O]  \___|  |_||_|   \___/   \___/   _(_)_  
_|"""""|_|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""|_|"""""|_| """ | 
"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-' 
```

but you know, with colors

if you don't specify a font it will pick a random one