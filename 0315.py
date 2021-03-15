import numpy as np
import matplotlib.pyplot as plt

wzero=float(input("Enter the frequency: "))

Npts=100000
total_dura=1000
dt=1/Npts*total_dura
t = np.arange(-Npts,Npts)*dt
f = []

for i in t:
	if(-30 < i < 30):
		f.append(np.cos(wzero*i))
	else:
		f.append(0)
t = list(t)
plt.subplot(2,1,1)
plt.plot(t,f)
plt.xlabel('time');plt.ylabel('f(t)');plt.grid()
plt.show()
