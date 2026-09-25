var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { Controller, Delete, Get, Post, Put, } from '@nestjs/common';
let UsersController = (() => {
    let _classDecorators = [Controller('users')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _createUser_decorators;
    let _getUsers_decorators;
    let _findUser_decorators;
    let _updateStudent_decorators;
    let _deleteStudent_decorators;
    var UsersController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _createUser_decorators = [Post()];
            _getUsers_decorators = [Get()];
            _findUser_decorators = [Get(':id')];
            _updateStudent_decorators = [Put(':id')];
            _deleteStudent_decorators = [Delete(':id')];
            __esDecorate(this, null, _createUser_decorators, { kind: "method", name: "createUser", static: false, private: false, access: { has: obj => "createUser" in obj, get: obj => obj.createUser }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getUsers_decorators, { kind: "method", name: "getUsers", static: false, private: false, access: { has: obj => "getUsers" in obj, get: obj => obj.getUsers }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _findUser_decorators, { kind: "method", name: "findUser", static: false, private: false, access: { has: obj => "findUser" in obj, get: obj => obj.findUser }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _updateStudent_decorators, { kind: "method", name: "updateStudent", static: false, private: false, access: { has: obj => "updateStudent" in obj, get: obj => obj.updateStudent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _deleteStudent_decorators, { kind: "method", name: "deleteStudent", static: false, private: false, access: { has: obj => "deleteStudent" in obj, get: obj => obj.deleteStudent }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            UsersController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        userService = __runInitializers(this, _instanceExtraInitializers);
        constructor(userService) {
            this.userService = userService;
        }
        //create users
        createUser(data) {
            return this.userService.createUser(data);
        }
        //get all users
        getUsers() {
            return this.userService.getUsers();
        }
        //get user by id
        findUser(id) {
            return this.userService.findUser(Number(id));
        }
        //update user
        updateStudent(id, data) {
            return this.userService.updateUser(Number(id), data);
        }
        //delete user
        deleteStudent(id) {
            return this.userService.deleteUser(Number(id));
        }
    };
    return UsersController = _classThis;
})();
export { UsersController };
