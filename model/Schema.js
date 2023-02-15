import { Schema, model, models, mongoose} from 'mongoose';

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    passwordResetToken: String, // champ pour stocker le token de réinitialisation du mot de passe
    passwordResetExpires: Date, // champ pour stocker l'expiration du token de réinitialisation du mot de passe
});

const addressSchema = new Schema({
    address1:String,
    address2:String,
    city:String,
    country:String,
    zip:String
}); 

const Users = models.user || model('user', userSchema);
const Address = models.address || model('address', addressSchema);

export {Address};
export default Users;
