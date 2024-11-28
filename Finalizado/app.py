from flask import Flask, render_template, request, redirect, url_for, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash
app = Flask(__name__)
app.secret_key = 'chave_secreta'  # Para mensagens flash
 
# Função para conectar ao banco de dados
def get_db_connection():
    conn = sqlite3.connect('users.db')
    conn.row_factory = sqlite3.Row
    return conn
 
# Página de login e registro
@app.route('/', methods=['GET', 'POST'])
def register_or_login():
    if request.method == 'POST':
        action = request.form['action']
       
        if action == 'register':
            nome = request.form['nome']
            email = request.form['email']
            senha = request.form['senha']
           
            hashed_senha = generate_password_hash(senha)  # Hash da senha
           
            with get_db_connection() as conn:
                try:
                    conn.execute('INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)',
                                 (nome, email, hashed_senha))
                    conn.commit()
                    flash('Cadastro realizado com sucesso! Faça login para continuar.', 'success')
                except sqlite3.IntegrityError:
                    flash('E-mail já cadastrado! Tente outro.', 'error')
       
        elif action == 'login':
            email = request.form['email']
            senha = request.form['senha']
           
            with get_db_connection() as conn:
                user = conn.execute('SELECT * FROM users WHERE email = ?', (email,)).fetchone()
           
            if user and check_password_hash(user['senha'], senha):  # Verifica o hash da senha
                return redirect(url_for('welcome', nome=user['nome']))
            else:
                flash('Credenciais inválidas! Verifique seu e-mail e senha.', 'error')
   
    return render_template('signup.html')
 
# Página de boas-vindas
@app.route('/home')
def welcome():
    nome = request.args.get('nome', 'Usuário')
    return render_template('interface.html', nome=nome)
 
if __name__ == '__main__':
    app.run(debug=True)