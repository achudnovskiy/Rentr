'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './tenancy.events';

var TenancySchema = new mongoose.Schema({
  tenant: {
    id: mongoose.Schema.ObjectId,
    name:String
  },
  landlord: {
    id: mongoose.Schema.ObjectId,
    name:String
  },
  place: {
    id: mongoose.Schema.ObjectId,
    name:String
  },
  startDate: Date,
  endDate: Date
},{collection:'tenancy'});

registerEvents(TenancySchema);
export default mongoose.model('Tenancy', TenancySchema);
