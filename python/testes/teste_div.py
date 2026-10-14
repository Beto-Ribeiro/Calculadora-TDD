import unittest
from calculadora.main import calculo_div


class TesteDiv(unittest.TestCase):
    def test_div(self):
        self.assertEqual(calculo_div(10, 2), 5)

    def test_divisao_por_zero(self):
        with self.assertRaises(ValueError):
            calculo_div(5, 0)


if __name__ == '__main__':
    unittest.main()
