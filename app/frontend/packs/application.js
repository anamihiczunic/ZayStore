// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

const images = require.context('../img', true)

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()


import magicAdd from '../js/magicAdd.js'

let a = magicAdd(2, 4);

// remove old console.log, and replace by the one below
console.log(`From mainjs, magicAdd result is ${a}`)