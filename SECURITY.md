# 🔐Seguridad De Nuestro Repositorio
En cada proyecto en el que trabajamos debemos velar por la seguridad del mismo y la privacidad de los datos que este contiene para liberarlo de plagios, entre otras muchas más razones a tener en cuenta.  
Lo realizado en esta practica se ve reflejado en que estos archivos se excluyen por:  

*  No aportar valor al código fuente.

* Poder generar conflictos.

* Aumentar el tamaño del repositorio sin beneficio.

* Poder contener información sensible o específica del entorno local.

En nuestro caso en esta practica, los archivos que excluimos no contienen nada de relevacia, simplemente lo hemos realizado para la realización de esta actividad.  

A continuación, voy a explicar de forma más detallada cada una de las instrucciones indicadas nuestro **_.gitignore_**:

 * ### 🎨 .CSS
    * Si los archivos CSS se generan automáticamente (por ejemplo, desde SASS, LESS o Tailwind), no tiene sentido versionarlos.

    * Se pueden regenerar fácilmente a partir del código fuente, así que incluirlos solo añade ruido al repositorio.

* ### 🖥️ DS_Store y Thumbs.db
    * Son archivos del sistema operativo:

    * .DS_Store lo crea macOS para guardar preferencias de visualización de carpetas.

    * Thumbs.db lo genera Windows para almacenar miniaturas de imágenes.

    * No tienen ninguna utilidad para el proyecto en sí y pueden variar de una máquina a otra.

 * ### 📄 .log
    * Archivos de registro o logs que se generan al ejecutar aplicaciones.

    * Su contenido cambia constantemente y suele ser temporal o de depuración.

    * Versionarlos puede llenar el historial de cambios con información irrelevante.
  
# 📚👈 Recuperación del repositorio en caso de perdida

   La recuperación del repositorio se garantiza combinando buenas prácticas de administración, copias de seguridad y políticas de recuperación como son las siguientes:
   
  ### 🔹 1. Control de versiones (propio de Git)

   * Cada clon local del repositorio contiene todo el historial de commits, ramas y etiquetas.

   * Si el servidor se pierde, cualquier clon completo puede servir para reconstruir el repositorio central.

### 🔹 2. Copias de seguridad

   * Los sistemas de hosting mantienen copias de todos los repositorios.

   * En repositorios autoalojados (ej. GitLab CE, Gitea, repos en un servidor propio) se recomienda configurar respaldos periódicos de:

      * Directorios .git

      * Bases de datos asociadas (si aplica, ej. en GitLab)

      * Configuración del servidor.

### 🔹 3. Redundancia y replicación

   * Plataformas como GitHub y GitLab utilizan almacenamiento distribuido y replicación geográfica, lo que protege frente a fallos en un único servidor o datacenter.

   * En entornos propios, puede configurarse mirror repositories o réplicas para recuperación rápida.

### 🔹 4. Políticas de recuperación

   * Hooks de _pre-receive/post-receive_ pueden validar datos y evitar corrupciones en pushes.

   * Revisiones de integridad (comandos como _git fsck_) ayudan a detectar objetos dañados en el repositorio.

   * Snapshots automáticos (por ejemplo en GitLab o GitHub) permiten restaurar repositorios a estados anteriores.

### 🔹 5. Procedimientos en caso de pérdida

   * Localizar un clon actualizado del repositorio.

   * Crear un nuevo repositorio vacío en el servidor.

   * Empujar de nuevo (_git push --mirror_) todo el historial desde el clon de respaldo.

   * En caso de errores graves en servidores gestionados (GitHub, GitLab.com, Bitbucket Cloud), su infraestructura de backup y soporte técnico garantiza la recuperación.
