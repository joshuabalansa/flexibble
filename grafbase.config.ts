import {g, auth, config } from '@grafbase/sdk';


const User = g.model('User', {
    name: g.string().length({min: 2, max: 50}),
})

export default {
    schema: g,
  };
