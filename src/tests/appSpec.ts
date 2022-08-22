import supertest from 'supertest';
import fs from 'fs';
import app from '../app';

const request = supertest(app);

describe('Test Endpoint Response', () => {
    it('can get to the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });

    it('can get to the api/resize/ endpoint', async () => {
        const response = await request.get(
            '/api/resize/?filename=image3&height=600&width=400'
        );
        expect(response.status).toBe(200);
    });

    it('can get to the /api/preview/ endpoint', async () => {
        const response = await request.get(
            '/api/preview/?filename=image1&height=300&width=200'
        );
        expect(response.status).toBe(200);
    });

    it('created a CSV file for original images', () => {
        expect(fs.existsSync(`asstes/full/.existingImgs.csv`)).toBeFalsy();
    });

    it('created a CSV file for resized images', () => {
        expect(fs.existsSync(`asstes/resized/.resizedImgs.csv`)).toBeFalsy();
    });
});
