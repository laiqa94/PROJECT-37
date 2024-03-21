"use strict";
function make_shirt(size = 'Large', text = 'I love TypeScript.') {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Mudium');
make_shirt('Small', 'I love python');
