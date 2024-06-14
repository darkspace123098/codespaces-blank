import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

class Arith extends JFrame implements ActionListener {
    JTextField num1, op, num2, res;
    JButton b;

    Arith() {
        Container c = getContentPane();
        c.setLayout(new FlowLayout());
        JLabel l1 = new JLabel("Num1");
        JLabel l2 = new JLabel("Operator");
        JLabel l3 = new JLabel("Num2");
        JLabel l4 = new JLabel("Result:");
        num1 = new JTextField("", 5);
        op = new JTextField("", 3);
        num2 = new JTextField("", 5);

        b = new JButton("=");
        res = new JTextField("", 25);
        b.addActionListener(this);
        c.add(l1);
        c.add(num1);
        c.add(l2);
        c.add(op);
        c.add(l3);
        c.add(num2);
        c.add(b);
        c.add(l4);
        c.add(res);
    }

    public void actionPerformed(ActionEvent e) {
        try {
            char operator = op.getText().charAt(0);
            int n1 = Integer.parseInt(num1.getText());
            int n2 = Integer.parseInt(num2.getText());
            int r = 0;

            switch (operator) {
                case '+':
                    r = n1 + n2;
                    break;
                case '-':
                    r = n1 - n2;
                    break;
                case '*':
                    r = n1 * n2;
                    break;
                case '/':
                    if (n2 != 0) {
                        r = n1 / n2;
                    } else {
                        throw new ArithmeticException("Division by zero");
                    }
                    break;
                default:
                    throw new IllegalArgumentException("Invalid operator");
            }
            res.setText(String.valueOf(r));
        } catch (NumberFormatException ex) {
            res.setText("Error: Invalid number format");
        } catch (ArithmeticException ex) {
            res.setText("Error: " + ex.getMessage());
        } 
    }

    public static void main(String args[]) {
        Arith ob = new Arith();
        ob.setSize(350, 180);
        ob.setVisible(true);
        ob.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}
