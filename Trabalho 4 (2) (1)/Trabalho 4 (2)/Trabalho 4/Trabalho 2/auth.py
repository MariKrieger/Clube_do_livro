import sqlite3
import hashlib

def conectar():
    return sqlite3.connect('usuarios.db')

def criar_usuario(nome_usuario, senha):
    # Criptografa a senha
    senha_hash = hashlib.sha256(senha.encode()).hexdigest()
    
    conn = conectar()
    cursor = conn.cursor()
    
    try:
        cursor.execute('INSERT INTO usuarios (nome_usuario, senha) VALUES (?, ?)', (nome_usuario, senha_hash))
        conn.commit()
        print("Usuário criado com sucesso!")
    except sqlite3.IntegrityError:
        print("Nome de usuário já existe.")
    finally:
        conn.close()

def autenticar_usuario(nome_usuario, senha):
    senha_hash = hashlib.sha256(senha.encode()).hexdigest()
    
    conn = conectar()
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM usuarios WHERE nome_usuario = ? AND senha = ?', (nome_usuario, senha_hash))
    usuario = cursor.fetchone()
    
    conn.close()
    
    return usuario is not None
