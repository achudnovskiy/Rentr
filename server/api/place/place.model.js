'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './place.events';

var PlaceSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  province: String,
  country: String,
  longitude: Number,
  lattitude: Number,
  owner: {
    ownerId: mongoose.Schema.ObjectId,
    ownerName:String
  },
  active: Boolean
});

registerEvents(PlaceSchema);
export default mongoose.model('Place', PlaceSchema);
