from flask import Flask,render_template,request
from tensorflow import keras
import numpy as np


model=keras.models.load_model('heart_model.h5')


app=Flask(__name__)

@app.route('/')
def man():
    return render_template('index.html')


@app.route('/pred',methods=['POST'])
def home():
    l=[]
    if request.method=="POST":
        age=int(request.form['a'])
        sex=int(request.form['b'])
        cp=int(request.form['c'])
        bp=int(request.form['d'])
        chol=int(request.form['e'])
        fbs=int(request.form['f'])
        restecg=int(request.form['g'])
        thalach=int(request.form['h'])
        exang=int(request.form['i'])
        oldpeak=float(request.form['j'])
        slope=int(request.form['k'])
        ca=int(request.form['l'])
        thal=int(request.form['m'])
        arr=np.array([[age,sex,cp,bp,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]])
        val=model.predict(arr)
        bval = (val > 0.5).astype(int)
        q=bval[0][0]
        if q==0:
            return render_template('outputneg.html')
        elif q==1:
            return render_template('outputpos.html')
    else:
        print('in  get')
@app.route('/nop')
def ref():
    return render_template('outputneg.html')

@app.route('/new')
def tq():
    return render_template('new.html')

@app.route('/pop')
def op():
    return render_template('outputpos.html')



if __name__=='__main__':
    app.run()

print(arr)