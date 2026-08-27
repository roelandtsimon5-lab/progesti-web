"""Rate limiter thread-safe pour l'API gouv.fr (max 7 req/s)."""

from __future__ import annotations

import threading
import time


class RateLimiter:
    def __init__(self, requests_per_second: float = 6.0) -> None:
        self._interval = 1.0 / requests_per_second
        self._lock = threading.Lock()
        self._last = 0.0

    def wait(self) -> None:
        with self._lock:
            now = time.monotonic()
            delay = self._last + self._interval - now
            if delay > 0:
                time.sleep(delay)
            self._last = time.monotonic()
