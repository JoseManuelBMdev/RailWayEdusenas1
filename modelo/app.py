import os
import numpy as np
import tensorflow as tf
from flask import Flask, request, jsonify
from tensorflow.keras.preprocessing.image import load_img, img_to_array

# Crear la aplicación Flask
app = Flask(__name__)

# Cargar el modelo entrenado
model = tf.keras.models.load_model('ModeloClasificacionSenasMejorado.keras')

# Definir el tamaño de las imágenes de entrada (debe coincidir con el tamaño usado durante el entrenamiento)
img_size = (200, 200)

# Lista de etiquetas (debe coincidir con el orden de las clases utilizadas durante el entrenamiento)
labels = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

# Ruta para recibir la imagen y realizar la predicción
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    if file:
        # Guardar la imagen recibida
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)
        
        # Cargar y preprocesar la imagen
        img = load_img(file_path, target_size=img_size)
        img_array = img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = img_array / 255.0  # Normalización
        
        # Hacer una predicción
        predictions = model.predict(img_array)
        predicted_class = np.argmax(predictions[0])
        confidence = predictions[0][predicted_class]
        
        # Devolver el resultado como JSON
        result = {
            'label': labels[predicted_class],
            'confidence': float(confidence)
        }
        
        # Eliminar la imagen guardada
        os.remove(file_path)
        
        return jsonify(result)

# Ejecutar la aplicación Flask
if __name__ == '__main__':
    if not os.path.exists('uploads'):
        os.makedirs('uploads')
    app.run(debug=True)