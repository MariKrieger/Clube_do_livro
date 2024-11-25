from flask import Flask, request, redirect, render_template
from auth import criar_usuario, autenticar_usuario

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        nome_usuario = request.form['nome_usuario']
        senha = request.form['senha']
        
        if autenticar_usuario(nome_usuario, senha):
            return "Login bem-sucedido!"
        else:
            return "Usuário ou senha inválidos."
    
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)

    @app.route('/registrar', methods=['GET', 'POST'])
    def registrar():
        if request.method == 'POST':
            nome_usuario = request.form['nome_usuario']
        senha = request.form['senha']
        criar_usuario(nome_usuario, senha)
        return redirect('/login')
    
        return render_template('registrar.html')

