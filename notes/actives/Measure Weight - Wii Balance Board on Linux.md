# Setup

## Prerequisites

- Any Linux PC with kernel supporting BlueZ 5.6x+
- Bluetooth adapter
- Python environment
  - The environment must contain necessary Bluetooth libraries

### Debian

```bash
sudo apt install bluetooth bluez bluez-tools
```

### Fedora

```bash
sudo dnf install bluez bluez-tools
```

## Steps

### Venv

TODO

### Miniconda

1. Create an environment with this specific Python version, then activate.
```bash
conda create -n balanceboard python=3.11
conda activate balanceboard
```
2. Use `pip` to install `Weii`.
```bash
pip install weii
```
3. Pair the Wii Balance Board with the PC, using the red SYNC button underneath the board.
> The board may disconnect after pairing; it only connects when a program opens the HID channel. 
4. Now, in that environment, run `weii`. Press the button on the front of the board to connect.

# Automation

```bash
#!/usr/bin bash

# -----------------------------
# Wii Balance Board Weight Logger
# -----------------------------

kg_to_lb = 2.20462262185

# Name of your conda environment
CONDA_ENV="balanceboard"

# Directory where logs will be stored
LOG_DIR="/tmp/balanceboard_logs"

mkdir -p "$LOG_DIR"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
CSV_FILE="$LOG_DIR/weights.csv"

source "$HOME/miniconda3/etc/profile.d/conda.sh"
conda activate "$CONDA_ENV"

if [ ! -f "$CSV_FILE" ]; then
    echo "timestamp,weight_kg" > "$CSV_FILE"
fi

echo "Logging weight to: $LOG_FILE"
echo "Press the FRONT POWER BUTTON on the Balance Board now."

WEIGHT_OUTPUT=$(weii 2>&1)

WEIGHT_KG=$(echo "$WEIGHT_OUTPUT" | grep -oP '(?<=Weight: )[\d\.]+')
WEIGHT_LB=$(echo "$WEIGHT_KG * $kg_to_lb" | bc -l)
WEIGHT_LB=$(printf "%.1f" "$WEIGHT_LB")

echo "$TIMESTAMP,$WEIGHT_LB" >> "$CSV_FILE"

echo "Logged: $TIMESTAMP → $WEIGHT_LB lbs"
echo "CSV file: $CSV_FILE"
```

# References

- [Weii Project](https://pypi.org/project/weii)
