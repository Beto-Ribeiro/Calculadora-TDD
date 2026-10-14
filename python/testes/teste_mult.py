import unittest
from calculadora.main import calculo_mult


class TesteMult(unittest.TestCase):
    def test_multiplicacao(self):
        self.assertEqual(calculo_mult(3, 4), 12)


if __name__ == '__main__':
    unittest.main()
