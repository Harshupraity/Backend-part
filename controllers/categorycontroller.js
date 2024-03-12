const Category = require("../model/category.model");
const categoryHandler = async (req,res) =>{

    // const hotelCategory = req.query.category 
    try{
        const categories = await Category.find({});
        res.json(categories)
    }catch(err){
        res.status(404).json({message:"Could not find Categories"})
    }
}
module.exports = categoryHandler