import math
import colebrook

factor = colebrook.sjFriction(4.572 * math.pow(10, -5), 236.1362)
print(factor)