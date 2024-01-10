import Citas from "../js/classes/Citas";

describe("Test Citas Class", () => {
  const cita = new Citas();

  const id = Date.now();

  test("Add new Cita", () => {
    const citaObj = {
      mascota: "Doggy",
      propietario: "John",
      telefono: "65588771122",
      fecha: "10-10-2024",
      hora: "11:20",
      sintomas: "sick",
    };
    citaObj.id = id;

    cita.agregarCita(citaObj);

    //test
    expect(cita).toMatchSnapshot();
  });

  test("Update new Cita", () => {
    const citaUpdate = {
      id,
      mascota: "Charlie",
      propietario: "John",
      telefono: "65588771122",
      fecha: "10-10-2024",
      hora: "11:20",
      sintomas: "sick",
    };

    cita.editarCita(citaUpdate);

    //test
    expect(cita).toMatchSnapshot();
  });
});
