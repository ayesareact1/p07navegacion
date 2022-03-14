let clientes = [
    {nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {nombre: 'Iberdrola Gas', cif: 'A76876866', localidad: 'Bilbao'},
    {nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
]

export function getClientes() {
    return clientes;
}

export function setCliente(cliente) {
    clientes.push(cliente);
}