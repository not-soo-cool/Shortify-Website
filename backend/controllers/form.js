const Form = require('../models/FormPro');
const User = require('../models/User');

exports.createForm = async (req, res) => {

    try {

        let user = await User.findById(req.user._id);
        if(user.isPro){
            const {fname, first, last, email, password, username, dob, gender, phNumber, address, city, state, postal} = req.body

            const form = await Form.create({
                form_name: fname,
                first_name: first,
                last_name: last,
                email,
                password,
                username, 
                dob, 
                gender, 
                phNumber, 
                address, 
                city, 
                state, 
                postal,
                owner: req.user._id,
                isProForm: true,
            });


            user.forms.push(form._id);

            await user.save();

            // res.status(201).json({
            //     success: true,
            //     message: "Form created"
            // })

        } else {
            const {fname, first, last, email, password, username, dob, gender, address, city, state, postal} = req.body

            const form = await Form.create({
                form_name: fname,
                first_name: first,
                last_name: last,
                email,
                password,
                username, 
                dob, 
                gender, 
                address,
                city,
                state,
                postal, 
                owner: req.user._id,
                isFormPro: false,
            });

            user.forms.push(form._id);
            await user.save();
        }
        
        res.status(201).json({
            success: true,
            message: "Form created"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getForm = async (req, res) => {
    
    try {

        const form = await Form.findById(req.params.id);
        // .populate("posts followers following");

        if(!form){
            return res.status(404).json({
                success: false,
                message: "Form not found"
            })
        }

        // if(form.owner.toString() != req.user._id.toString()){
        //     return res.status(401).json({
        //         success: false,
        //         message: "Unauthorized"
        //     })
        // }

        res.status(200).json({
            success: true,
            form
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.getMyFormsId = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        const forms = [];

        for (let i = 0; i < user.forms.length; i++) {
            const form = await Form.findById(user.forms[i])
            // .populate("likes comments.user owner");
            forms.push(form)
        }

        res.status(200).json({
            success: true,
            forms,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.getMyForms = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        const forms = [];

        for (let i = 0; i < user.forms.length; i++) {
            const form = await Form.findById(user.forms[i])
            // .populate("likes comments.user owner");
            forms.push(form)
        }

        res.status(200).json({
            success: true,
            forms,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.updateForm = async (req, res) => {

    try {

        const form = await Form.findById(req.params.id);

        if(!form){
            return res.status(404).json({
                success: false,
                message: "Form not found"
            })
        }

        if(form.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        const {first, last, email, password, username, dob, gender, phNumber, address, city, state, postal} = req.body

        if(first) form.first_name = first;
        if(last) form.last_name = last;
        if(email) form.email = email;
        if(password) form.password = password;
        if(dob) form.dob = dob;
        if(gender) form.gender = gender;
        if(phNumber) form.phNumber = phNumber;
        if(address) form.address = address;
        if(city) form.city = city;
        if(state) form.state = state;
        if(postal) form.postal = postal;
        
        if(form.isFormPro){
            if(username) form.username = username;
            if(city) form.city = city;
            if(state) form.state = state;
            if(postal) form.postal = postal;
        }

        await form.save();

        res.status(200).json({
            success: true,
            message: "Form Successfully Updated"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.deleteForm = async (req, res) => {

    try {

        const form = await Form.findById(req.params.id);

        // console.log(post);

        if(!form){
            return res.status(404).json({
                success: false,
                message: "Form not found"
            })
        }

        if(form.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        // await cloudinary.v2.uploader.destroy(post.image.public_id)

        const user = await User.findById(req.user._id);

        const index = user.forms.indexOf(req.params.id);
        user.forms.splice(index, 1);

        await user.save();

        await Form.findByIdAndDelete(req.params.id);
    
        res.status(200).json({
            success:true,
            message:"Form Deleted"
        });

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};