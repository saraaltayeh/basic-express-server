it('Handle not found request', async () => {
    const response = await request.post('/person?name=ss');
    expect(response.status).toEqual(404);
   
});

it('Bad method', async () => {
    const response = await request.post('/person?name=ss');
    expect(response.status).toEqual(404);
   
});