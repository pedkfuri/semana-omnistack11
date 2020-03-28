const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        //.set('Authorization', 'id_ong');
        .send({
            name: "Focinho carente",
            email: "contato@contato.com",
            whatsapp: "37998464203",
            city: "Belo Horizonte",
            uf: "MG"
        });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});

//TODO: criar teste pro resto
//se der errado, excluir o banco de testes antes de rodar 'npm test'