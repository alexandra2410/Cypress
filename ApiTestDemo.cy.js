/// <reference types="cypress" />


describe('Basic API Testing', () => {

  it('test get', () => {
    cy.request({
      method: 'GET',
      url: 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/current',
      headers: {
                 
        'authorization': 'Bearer eyJraWQiOiJwNDBtYVJYRVg0VmFFQnpTbzUrSDRUd2UxcTF4cUpMcGEwQ3lPaVNmUTZBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxMzU1YWZlZi1mZjU0LTRkYWYtYTYwYy01NWEyNDUwMzdiYzAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfRVRUSUtjU3NvIiwiY2xpZW50X2lkIjoiMnQxbXV0Z2M0YXVpdWhvcWltajJjdDBoOG4iLCJvcmlnaW5fanRpIjoiMDMyNmVjMjYtYmEwYS00ZjdiLWExZWMtNGJiYjIzNjQ5MzMyIiwiZXZlbnRfaWQiOiIyOGE1M2QxMi04OWVkLTRjYmQtODVlNi01Y2VjOWYxNDE5ZDMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNzI2NzY5MzgxLCJleHAiOjE3MjY3NzI5ODEsImlhdCI6MTcyNjc2OTM4MSwianRpIjoiZjEwZWRmYWEtYmEwZi00YjE4LTgyNDktNTE4MzkxZGM3NmNjIiwidXNlcm5hbWUiOiJhbGV4YW0wNDUifQ.bQqPjeeDCYLYmJwPohE-9SjzivVVPzWRIDBf6j6Vr1NUQPG8GR7ASRQ9BxRyys19gdFvP_oXILGVl_iu8RkoEd7Q9H2urOhWM2_nwLHW2_5wspjw86A3-9p-2qXqqxvYGE1c8zWHf34M12jvWxWwV3fVbI9ABHIU8FW66jsPavdIWS_ZZ5mJ1_hFsEuLhTHeUFllWj39xJCUnof-sDDkvAIqFb0N3LVqQuWQIWzI8SxQs7EL7dg-kxRDaICUnEYCBhe2ijG4kXQ27ovbquYfcyhocRFCaBFY9R8TrcLFImAqjKBbx9I7ovKZ9GOz3mSlSphbS5-p37KTu7eCkPA3XA'
      }
    }).then((response) => {
      // Verificar que la respuesta tiene el código de estado correcto
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('firstName', 'Alexandra');
      expect(response.body).to.have.property('lastName', 'Martinez');
      expect(response.body).to.have.property('isAdmin', false);
      expect(response.body.firstName.length).to.eq(9);
      // Puedes añadir más validaciones según lo que devuelva la respuesta
      cy.log(response.body);
    })
  })
  it('Validar el metodo PUT', () => {

    cy.request({
      method: 'PUT',
      url: 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/profile',
      headers: {
                 
        'authorization': 'Bearer eyJraWQiOiJwNDBtYVJYRVg0VmFFQnpTbzUrSDRUd2UxcTF4cUpMcGEwQ3lPaVNmUTZBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxMzU1YWZlZi1mZjU0LTRkYWYtYTYwYy01NWEyNDUwMzdiYzAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfRVRUSUtjU3NvIiwiY2xpZW50X2lkIjoiMnQxbXV0Z2M0YXVpdWhvcWltajJjdDBoOG4iLCJvcmlnaW5fanRpIjoiMDMyNmVjMjYtYmEwYS00ZjdiLWExZWMtNGJiYjIzNjQ5MzMyIiwiZXZlbnRfaWQiOiIyOGE1M2QxMi04OWVkLTRjYmQtODVlNi01Y2VjOWYxNDE5ZDMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNzI2NzY5MzgxLCJleHAiOjE3MjY3NzI5ODEsImlhdCI6MTcyNjc2OTM4MSwianRpIjoiZjEwZWRmYWEtYmEwZi00YjE4LTgyNDktNTE4MzkxZGM3NmNjIiwidXNlcm5hbWUiOiJhbGV4YW0wNDUifQ.bQqPjeeDCYLYmJwPohE-9SjzivVVPzWRIDBf6j6Vr1NUQPG8GR7ASRQ9BxRyys19gdFvP_oXILGVl_iu8RkoEd7Q9H2urOhWM2_nwLHW2_5wspjw86A3-9p-2qXqqxvYGE1c8zWHf34M12jvWxWwV3fVbI9ABHIU8FW66jsPavdIWS_ZZ5mJ1_hFsEuLhTHeUFllWj39xJCUnof-sDDkvAIqFb0N3LVqQuWQIWzI8SxQs7EL7dg-kxRDaICUnEYCBhe2ijG4kXQ27ovbquYfcyhocRFCaBFY9R8TrcLFImAqjKBbx9I7ovKZ9GOz3mSlSphbS5-p37KTu7eCkPA3XA'
      },
      body: {
        "username":"alexam045",
        "firstName":"Alexandra",
        "lastName":"Martinez",
        "gender":"",
        "age":"22",
        "address":"",
        "phone":"045",
        "hobby":"",
        "currentPassword":"",
        "newPassword":"",
        "newPasswordConfirmation":""
        }

    }).then((response) => {
      // Verificar que la respuesta tiene el código de estado correcto
      expect(response.status).to.eq(200);
  })
  })
  it('validar con un GET que se puede cambiar la edad', () => {
    cy.request({
      method: 'GET',
      url: 'https://k51qryqov3.execute-api.ap-southeast-2.amazonaws.com/prod/users/profile',
      headers: {
                 
        'authorization': 'Bearer eyJraWQiOiJwNDBtYVJYRVg0VmFFQnpTbzUrSDRUd2UxcTF4cUpMcGEwQ3lPaVNmUTZBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIxMzU1YWZlZi1mZjU0LTRkYWYtYTYwYy01NWEyNDUwMzdiYzAiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbVwvYXAtc291dGhlYXN0LTJfRVRUSUtjU3NvIiwiY2xpZW50X2lkIjoiMnQxbXV0Z2M0YXVpdWhvcWltajJjdDBoOG4iLCJvcmlnaW5fanRpIjoiMDMyNmVjMjYtYmEwYS00ZjdiLWExZWMtNGJiYjIzNjQ5MzMyIiwiZXZlbnRfaWQiOiIyOGE1M2QxMi04OWVkLTRjYmQtODVlNi01Y2VjOWYxNDE5ZDMiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNzI2NzY5MzgxLCJleHAiOjE3MjY3NzI5ODEsImlhdCI6MTcyNjc2OTM4MSwianRpIjoiZjEwZWRmYWEtYmEwZi00YjE4LTgyNDktNTE4MzkxZGM3NmNjIiwidXNlcm5hbWUiOiJhbGV4YW0wNDUifQ.bQqPjeeDCYLYmJwPohE-9SjzivVVPzWRIDBf6j6Vr1NUQPG8GR7ASRQ9BxRyys19gdFvP_oXILGVl_iu8RkoEd7Q9H2urOhWM2_nwLHW2_5wspjw86A3-9p-2qXqqxvYGE1c8zWHf34M12jvWxWwV3fVbI9ABHIU8FW66jsPavdIWS_ZZ5mJ1_hFsEuLhTHeUFllWj39xJCUnof-sDDkvAIqFb0N3LVqQuWQIWzI8SxQs7EL7dg-kxRDaICUnEYCBhe2ijG4kXQ27ovbquYfcyhocRFCaBFY9R8TrcLFImAqjKBbx9I7ovKZ9GOz3mSlSphbS5-p37KTu7eCkPA3XA'
      }
    }).then((response) => {
      // Verificar que la respuesta tiene el código de estado correcto
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('age', '22');
      cy.log(response.body);
    })
  })
})
    
