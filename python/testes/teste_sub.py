import unittest
from calculadora.main import calculo_sub


class TesteCalculoSub(unittest.TestCase):
    def test_calculo_sub(self):
        self.assertEqual(calculo_sub(5, 3), 2)


if __name__ == '__main__':
    unittest.main()
