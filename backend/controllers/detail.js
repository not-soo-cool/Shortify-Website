const Detail = require('../models/DetailPro');
const User = require('../models/User');

exports.createDetailForm = async (req, res) => {

    try {

        let user = await User.findById(req.user._id);
        if(user.isPro){
            const {dname, first, middle, last, prefer, email, dob, gender, phNumber, address, city, state, postal, ssn, id, marital, eName, eRelation, eContact} = req.body

            const detail = await Detail.create({
                detail_name: dname,
                first_name: first,
                middle_name: middle,
                last_name: last,
                preferred_name: prefer,
                email,
                dob, 
                gender, 
                phNumber, 
                address, 
                city, 
                state, 
                postal,
                ssn,
                id,
                marital,
                emergency:{
                    name: eName,
                    relation: eRelation,
                    phNum: eContact,
                },
                owner: req.user._id,
                isDetailPro: true,
            });


            user.details.push(detail._id);

            await user.save();

        } else {
            const {dname, first, middle, last, dob, gender, address, city, state, postal, ssn, id} = req.body

            const detail = await Detail.create({
                detail_name: dname,
                first_name: first,
                middle_name: middle,
                last_name: last,
                dob, 
                gender, 
                address, 
                city, 
                state, 
                postal,
                ssn,
                id,
                owner: req.user._id,
                isDetailPro: false,
            });

            user.details.push(detail._id);
            await user.save();
        }
        
        res.status(201).json({
            success: true,
            message: " Detail Form created"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.getDetailForm = async (req, res) => {
    
    try {

        const detail = await Detail.findById(req.params.id);
        // .populate("posts followers following");

        if(!detail){
            return res.status(404).json({
                success: false,
                message: "Detail Form not found"
            })
        }

        // if(detail.owner.toString() != req.user._id.toString()){
        //     return res.status(401).json({
        //         success: false,
        //         message: "Unauthorized"
        //     })
        // }

        res.status(200).json({
            success: true,
            detail
        })

        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.getMyDetailFormsId = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        const details = [];

        for (let i = 0; i < user.details.length; i++) {
            const detail = await Detail.findById(user.details[i])
            // .populate("likes comments.user owner");
            details.push(detail);
        }

        res.status(200).json({
            success: true,
            details,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.getMyDetailForms = async (req, res) => {

    try {

        const user = await User.findById(req.user._id);

        const details = [];

        for (let i = 0; i < user.details.length; i++) {
            const detail = await Detail.findById(user.details[i])
            // .populate("likes comments.user owner");
            details.push(detail);
        }

        res.status(200).json({
            success: true,
            details,
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.updateDetailForm = async (req, res) => {

    try {

        const detail = await Detail.findById(req.params.id);

        if(!detail){
            return res.status(404).json({
                success: false,
                message: "Detail Form not found"
            })
        }

        if(detail.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        const {first, middle, last, prefer, email, dob, gender, phNumber, address, city, state, postal, ssn, id, marital} = req.body

        if(first) detail.first_name = first;
        if(middle) detail.middle_name = middle;
        if(last) detail.last_name = last;
        if(dob) detail.dob = dob;
        if(gender) detail.gender = gender;
        if(address) detail.address = address;
        if(city) detail.city = city;
        if(state) detail.state = state;
        if(postal) detail.postal = postal;
        if(ssn) detail.ssn = ssn;
        if(id) detail.id = id;

        if(detail.isDetailPro){
            if(prefer) detail.preferred_name = prefer;
            if(email) detail.email = email;
            if(phNumber) detail.phNumber = phNumber;
            if(marital) detail.marital = marital;
            if(req.body.emergency){
                if(req.body.emergency.name){
                    detail.emergency.name = req.body.emergency.name;
                }
                if(req.body.emergency.relation){
                    detail.emergency.relation = req.body.emergency.relation;
                }
                if(req.body.emergency.phNum){
                    detail.emergency.phNum = req.body.emergency.phNum;
                }      
            }   
        }

        await detail.save();

        res.status(200).json({
            success: true,
            message: "Detail Form Successfully Updated"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteDetailForm = async (req, res) => {

    try {

        const detail = await Detail.findById(req.params.id);

        // console.log(post);

        if(!detail){
            return res.status(404).json({
                success: false,
                message: "Detail Form not found"
            })
        }

        if(detail.owner.toString() !== req.user._id.toString()){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            })
        }

        const user = await User.findById(req.user._id);

        const index = user.details.indexOf(req.params.id);
        user.details.splice(index, 1);

        await user.save();

        await Detail.findByIdAndDelete(req.params.id);
    
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