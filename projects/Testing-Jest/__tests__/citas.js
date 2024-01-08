import Citas from "../js/classes/Citas";

describe("Test Citas Class", () => {
  const cita = new Citas();

  test("Add new Cita", () => {
    const citaObj = {
      mascota: "Doggy",
      propietario: "John",
      telefono: "65588771122",
      fecha: "10-10-2024",
      hora: "11:20",
      sintomas: "sick",
    };
    citaObj.id = Date.now();

    cita.agregarCita(citaObj);

    //test
    expect(cita).toMatchSnapshot();
  });
});
