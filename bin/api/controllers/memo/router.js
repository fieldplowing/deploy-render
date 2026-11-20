import express from 'express';
import controller from './controller.js';
export default express
    .Router()
    .get('/', controller.all)
    .post('/', controller.create)
    .delete('/', controller.clear)
    .get('/:id', controller.byId)
    .put('/:id', controller.update)
    .patch('/:id', controller.partialUpdate) // 💡 この1行を追加
    .delete('/:id', controller.delete);
//# sourceMappingURL=router.js.map