
const images = require.context('../img', true)

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// import 'slick-carousel/slick/slick'
import '../js/bootstrap_js_files.js'
import "@fortawesome/fontawesome-free/js/all"
import '../js/templatemo.js'

import magicAdd from '../js/magicAdd.js'


let a = magicAdd(2, 4);

// remove old console.log, and replace by the one below
console.log(`From mainjs, magicAdd result is ${a}`)