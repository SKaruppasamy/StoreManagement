Bio = require('./bioModel');

exports.index = function (req, res) {
    Bio.get(function (err, bio) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Product Details Successfully!",
            data: bio       
        });
    });
};

exports.add = function (req, res) {
    var bio = new Bio();
    bio.CustomerName = req.body.CustomerName? req.body.CustomerName: bio.CustomerName;
    bio.CustomerID = req.body.CustomerID? req.body.CustomerID: bio.CustomerID;
    bio.ProductName= req.body.ProductName;
    bio.Date = req.body.Date;
    bio.Quantity = req.body.Quantity;
    bio.ProductAmount = req.body.ProductAmount;
    bio.TotalAmount=bio.Quantity*bio.ProductAmount;
   
  
    bio.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: "New Product Buying!",
            data: bio
        });
    });
};

// View Bio
exports.view = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
        res.json({
            message: 'Product Details',
            data: bio
        });
    });
};

// Update the Product Details in Store portfolio..
exports.update = function (req, res) {
    Bio.findById(req.params.bio_id, function (err, bio) {
        if (err)
            res.send(err);
            bio.CustomerName = req.body.CustomerName? req.body.CustomerName: bio.CustomerName;
            bio.CustomerID = req.body.CustomerID;
            bio.ProductName= req.body.ProductName;
            bio.Date = req.body.Date;
            bio.Quantity = req.body.Quantity;
            bio.ProductAmount = req.body.ProductAmount;
            bio.TotalAmount=bio.Quantity*bio.ProductAmount;
    

        //save and check errors
        bio.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: "Product Updated Successfully",
                data: bio
            });
        });
    });
};

// Delete product Details in Store Portfolio..
exports.delete = function (req, res) {
    Bio.deleteOne({
        _id: req.params.bio_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success..",
            message: 'Product Details Deleted...'
        });
    });
};