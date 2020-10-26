const { expect } = require('chai');
const sinon = require(sinon);

const boulderController = require('../controllers/boulderController');

describe('Boulder Controller Tests:', () => {
    describe('Post', () => {
        it('should not allow an empty name on post', () => {
            const Book = (book) => { this.save = () => { } };

            const req = {
                body: {
                    grade: 0
                }
            };

            const res = {
                status: sinon.spy(),
                send: sinon.spy(),
                json: sinon.spy()
            };

            expect(res.status.calledWith(400)).to.be.true;
            expect(res.send.calledWith())
        })
    })
})