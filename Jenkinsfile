node('nodejs') {
  def version = env.CHANGE_ID

  stage('Git checkout') {
    echo "Descargando la version $version del respositorio GIT..."
    checkout scm
  }

  stage('Build') {
    echo "Compilando el proyecto"
    sh 'npm install'
  }

  stage('Tests') {
    echo "Ejecutando tests"
    sh 'npm run tests'
  }

  stage('Deploy') {
    echo "Desplegando aplicación"
  }
}
