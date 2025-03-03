-- En este archivo deben estar tus ejercicios de consultas sql

-- 1. **Empleados ordenados alfabéticamente (Z...A):**  
--    Muestra los nombres de los empleados en orden alfabético descendente.
    SELECT nombre FROM empleados ORDER BY nombre DESC;

-- 2. **Empleados de Soporte:**  
--    Muestra el nombre, el puesto y la localidad de los empleados con el puesto de 'Soporte'.

    SELECT E.nombre, P.puesto, L.localidad FROM empleados E 
    JOIN puestos P ON E.puesto_id = P.id 
    JOIN departamentos D ON E.departamento_id = D.id 
    JOIN localidades L ON D.localidad_id = L.id 
    WHERE P.puesto = 'Soporte';

-- 3. **Nombres que terminan con 'o':**  
--    Lista los nombres de los empleados cuyo nombre termina con la letra 'o'.

    SELECT nombre FROM empleados WHERE nombre LIKE '%o';

-- 4. **Empleados en Carlos Paz:**  
--    Muestra el nombre, sueldo y localidad de los empleados que trabajan en la localidad Carlos Paz.

    SELECT E.nombre, E.sueldo, L.localidad FROM empleados E 
    JOIN departamentos D ON E.departamento_id = D.id
    JOIN localidades L ON D.localidad_id = L.id 
    WHERE L.localidad = 'Carlos Paz';

-- 5. **Sueldos entre 10000 y 13000:**  
--    Muestra el nombre, sueldo y localidad de los empleados cuyo sueldo se encuentra entre 10000 y 13000.

    SELECT E.nombre, E.sueldo, L.localidad FROM empleados E 
    JOIN departamentos D ON E.departamento_id = D.id
    JOIN localidades L ON D.localidad_id = L.id
    WHERE sueldo BETWEEN 10000 AND 13000;

-- 6. **Departamentos con más de 5 empleados:**  
--    Visualiza los departamentos que tienen más de 5 empleados.

    SELECT D.denominacion, COUNT(E.id) AS num_empleados FROM empleados E 
    JOIN departamentos D ON E.departamento_id = D.id
    GROUP BY D.id, D.denominacion 
    HAVING COUNT(E.id) > 5; --REVISAR

-- 7. **Empleados en Córdoba con puesto de Analista o Programador:**  
--    Muestra los nombres de los empleados que trabajan en Córdoba y tienen el puesto de 'Analista' o 'Programador'.

    SELECT E.nombre FROM empleados E 
    JOIN puesto P ON E.puesto_id = P.id
    JOIN departamentos D ON E.departamento_id = D.id
    JOIN localidades L ON D.localidad_id = L.id
    WHERE L.localidad = 'Córdoba' AND (P.puesto = 'Analista' OR P.puesto = 'Programador');

-- 8. **Sueldo medio de todos los empleados:**  
--    Calcula el sueldo medio de todos los empleados.

    SELECT AVG(sueldo) AS sueldo_medio FROM empleados;

-- 9. **Máximo sueldo en el departamento 10:**  
--    Muestra el máximo sueldo de los empleados del departamento 10.

    SELECT MAX(sueldo) AS max_sueldo FROM empleados WHERE departamento_id = 10; --REVISAR

-- 10. **Sueldo mínimo en el departamento Soporte:**  
--     Calcula el sueldo mínimo de los empleados del departamento 'Soporte'.

    SELECT MIN(sueldo) AS min_sueldo FROM empleados E 
    JOIN departamento D ON E.departamento_id = D.id
    WHERE D.denominacion = 'Soporte'; --REVISAR

-- 11. **Suma de sueldos por puesto:**  
--     Calcula la suma de sueldos para cada puesto.

    SELECT P.puesto, SUM(E.sueldo) AS total_sueldos FROM empleados E
    JOIN puestos P ON E.puesto_id = P.id 
    GROUP BY P.puesto;

