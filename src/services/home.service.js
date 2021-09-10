class HomeService {
    index() {
        return {
            message: "Hello World!"
        };
    }
}

module.exports = HomeService;

// Awilix nos ayuda a simplificar 
// module.exports = new HomeService()