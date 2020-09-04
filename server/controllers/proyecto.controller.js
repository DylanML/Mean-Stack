const Proyecto = require('../models/proyecto');


const proyectoCtrl = {};

proyectoCtrl.getOrdenes = async(req, res) => {
    const requests = await Proyecto.find();
    res.json(requests);
};

proyectoCtrl.createOrden = async(req, res) => {
    const requests = new Proyecto({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        productDescription: req.body.productDescription,
        price: req.body.price
    });
    await requests.save();
    res.json({
        'Estado': 'Orden guardada'
    });
};

proyectoCtrl.getOrden = async(req, res) => {
    const requests = await Proyecto.findById(req.params.id);
    res.json(requests);
};

proyectoCtrl.editOrden = async(req, res) => {
    const { id } = req.params;
    const requests = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        productDescription: req.body.productDescription,
        price: req.body.price
    };
    await Proyecto.findByIdAndUpdate(id, { $set: requests }, { new: true });
    res.json({ status: 'Orden actualizada' });
};

proyectoCtrl.deleteOrden = async(req, res) => {
    await Proyecto.findByIdAndDelete(req.params.id);
    res.json({ status: 'Orden eliminada' });
};

module.exports = proyectoCtrl;