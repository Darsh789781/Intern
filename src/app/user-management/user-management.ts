export class User {
      id!: number;
      firstname!: string;
      lastname!: string;
      email!: string;
      client_name!: string;
      office!: string;
      contact_no!:string;
    
      constructor(
            id: number,
            firstname: string,
            lastname: string,
            email: string,
            client_name: string,
            office: string,
            contact_no:string
      ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.client_name = client_name;
        this.office = office;
        this.contact_no=contact_no
      }
    }