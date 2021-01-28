
import * as firebase from 'firebase-admin';

const Schema = mongoose.Schema;

export const tripSchema = new Schema({
   trip_name: String,
   trip_place: String
})

const tripModel = mongoose.model('trip', tripSchema, 'trip');
export default tripModel;
