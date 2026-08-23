# 🚀 PoC: Automatización de CI y Protección de Ramas en GitHub

Esta Prueba de Concepto (PoC) demuestra cómo implementar un flujo de **Integración Continua (CI)** con **GitHub Actions** para garantizar la calidad del código de forma automatizada antes de cada integración.

---

## 🎯 ¿Qué problema resuelve?

* **Evita regresiones:** Asegura que los cambios nuevos no rompan funcionalidades existentes (ideal para prácticas como **TDD**).
* **Elimina el *"en mi máquina funciona"*:** Las pruebas corren en un entorno estándar en la nube.
* **Bloquea código defectuoso:** Impide que se integre código a la rama principal si las pruebas no pasan.

---

## 🛠️ ¿Cómo se implementó?

La solución combina dos mecanismos de GitHub:

1. **Pipeline de CI (`.github/workflows/ci.yml`):**
   * Se dispara automáticamente con cada `push` o `pull_request` hacia `main`.
   * Levanta un entorno Linux, instala dependencias y ejecuta la suite de pruebas con **Jest**.

2. **Reglas de Protección (`Branch Protection Rulesets`):**
   * **Sin pushes directos:** Se prohíbe subir cambios directo a `main`. Todo cambio requiere un *Pull Request*.
   * **Filtro de calidad obligatorio:** El botón de *Merge* se mantiene bloqueado hasta que el pipeline de CI devuelva resultado verde (🟢).

---

## 🧪 Validaciones Realizadas

Durante la prueba se comprobaron dos escenarios clave:

* 🟢 **Camino exitoso:** Se subió una rama secundaria con código correcto. El pipeline ejecutó los tests, pasaron en verde y se habilitó el *Merge* a `main`.
* 🔴 **Bloqueo por error:** Se introdujo un fallo intencional en el código. El pipeline detectó la falla en los tests y **bloqueó automáticamente la fusión**, impidiendo ingresar el bug a la rama principal.

---

## 💻 Ejecución Local

Para clonar y correr las pruebas en tu máquina:

```bash
git clone [https://github.com/joacochen1998/poc-ci-node.git](https://github.com/joacochen1998/poc-ci-node.git)
cd poc-ci-node
npm install
npm test
